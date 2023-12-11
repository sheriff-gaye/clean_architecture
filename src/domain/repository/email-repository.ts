
export interface EmailRepository {
    sendRegistrationEmail(email: string, username: string): Promise<void>;
  }
  