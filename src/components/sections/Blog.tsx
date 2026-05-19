import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

async function getMediumPosts() {
  try {
    const res = await fetch("https://medium.com/feed/@chriselikem", {
      next: { revalidate: 43200 } // Cache and background revalidate every 12 hours
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const xml = await res.text();

    const items = xml.split("<item>");
    items.shift(); // Remove feed metadata before first <item>

    const posts = items.slice(0, 3).map((item) => {
      const titleMatch = item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) || item.match(/<title>([\s\S]*?)<\/title>/);
      const linkMatch = item.match(/<link>([\s\S]*?)<\/link>/);
      const dateMatch = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
      const contentMatch = item.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);
      const categories = [...item.matchAll(/<category><!\[CDATA\[([\s\S]*?)\]\]><\/category>/g)].map(m => m[1]);

      const title = titleMatch ? titleMatch[1].trim() : "Untitled Post";
      const url = linkMatch ? linkMatch[1].trim() : "#";
      const dateStr = dateMatch ? dateMatch[1].trim() : "";
      
      const formattedDate = dateStr ? new Date(dateStr).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      }) : "Recently";

      // Parse first cover graphic out of content:encoded
      const content = contentMatch ? contentMatch[1] : "";
      const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
      const image = imgMatch ? imgMatch[1] : "/images/blog-1.jpg";

      // Parse clean text excerpt (strip HTML)
      const textExcerpt = content
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      const excerpt = textExcerpt.length > 120
        ? textExcerpt.substring(0, 120) + "..."
        : textExcerpt || "Click to read this article on Medium.";

      return {
        title,
        url,
        date: formattedDate,
        excerpt,
        image,
        category: categories[0] || "Writing"
      };
    });

    if (posts.length === 0) throw new Error("No posts found in feed");
    return posts;
  } catch (error) {
    console.warn("Medium RSS fetch failed, falling back to static portfolio data:", error);
    // Highly resilient static data fallback
    return blogPosts.map(post => ({
      title: post.title,
      category: post.category,
      date: post.date,
      excerpt: post.excerpt,
      url: post.url,
      image: post.image
    }));
  }
}

export async function Blog() {
  const posts = await getMediumPosts();

  return (
    <section id="blog" className="py-20 md:py-28">
      <div className="section-container">
        <ScrollAnimate className="mb-14">
          <p className="text-sm font-medium text-[var(--accent)] mb-2">Blog</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-tight">
            Writing & ideas
          </h2>
        </ScrollAnimate>
        
        <ul className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <li key={post.url}>
              <ScrollAnimate
                yOffset={16}
                delay={i * 0.06}
                duration={0.35}
                className="h-full"
              >
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden hover:border-[var(--accent)]/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="aspect-video relative bg-[var(--border)] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-between min-h-[160px]">
                    <div>
                      <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider">
                        {post.category} · {post.date}
                      </p>
                      <h3 className="mt-2 font-bold text-[var(--foreground)] leading-snug group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--muted-foreground)] line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </a>
              </ScrollAnimate>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
