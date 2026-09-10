import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import type { UserProfile, UserRole } from "@/types/user";

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as UserProfile;
  }
  return null;
}

export async function createUserProfile(
  uid: string, 
  data: { email: string; name: string; role?: UserRole }
): Promise<void> {
  // IMPORTANT: The frontend must never be trusted to assign privileged roles.
  // We strictly default to 'customer' if role is not explicitly verified, 
  // and in a real prod app, 'admin' would be blocked at the security rules level.
  const role = data.role && data.role === "seller" ? "seller" : "customer";

  const userProfile: UserProfile = {
    uid,
    name: data.name,
    email: data.email,
    role,
    isActive: true,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  await setDoc(doc(db, "users", uid), userProfile);
}
