
import bcrypt from 'bcryptjs';

export async function verifyPassword(plainTextPassword: string | undefined, hashedPassword: string): Promise<boolean> {
  try {
    // Compare the plain text password with the hashed password
    return await bcrypt.compare(plainTextPassword!, hashedPassword);
  } catch (error) {
    console.error('Error verifying password:', error);
    return false;
  }
}
