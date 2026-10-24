export type ContactMessage = {
  name: string;
  company: string;
  email: string;
  message: string;
  locale: string;
};

export interface ContactProvider {
  /** Throws on failure. */
  send(message: ContactMessage): Promise<void>;
}

export type ContactStatus = "idle" | "success" | "invalid" | "error" | "not-configured";
