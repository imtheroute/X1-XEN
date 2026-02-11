import { PublicKey } from "@solana/web3.js";

const programId = new PublicKey(
  "kTTgNQjhppQQXN2bZ2pFfT7tGN2NHEMgidxrfcs6aRs"
);

const [vaultAuthority] = PublicKey.findProgramAddressSync(
  [Buffer.from("vault-authority")],
  programId
);

console.log("Vault Authority PDA:", vaultAuthority.toBase58());
