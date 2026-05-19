"use server";

export async function submitContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all fields." };
  }

  try {
    // 1. Simulate network latency (1.2 seconds) for high-end feel in UI
    await new Promise((resolve) => setTimeout(resolve, 1200));

    console.log(`[Contact Submission]
Name: ${name}
Email: ${email}
Message: ${message}`);

    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3FormsKey) {
      // 2. Transmit message payload securely to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name,
          email,
          message,
          subject: `Portfolio Inquiry from ${name}`,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to forward contact form details.");
      }
    }

    return { success: true, error: null };
  } catch (error: any) {
    console.error("submitContactForm Error:", error);
    return { success: false, error: error.message || "Something went wrong. Please try again." };
  }
}
