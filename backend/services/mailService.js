/**
 * Mail service helper for notifications & inquiries
 */
export const sendNotificationEmail = async ({ to, subject, html }) => {
  console.log(`[Email Service] Simulating notification email to ${to}: ${subject}`);
  return { delivered: true, timestamp: new Date() };
};
