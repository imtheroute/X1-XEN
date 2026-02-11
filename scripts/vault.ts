import { PublicKey } from "@solana/web3.js";

const programId = new PublicKey(
  "CHv4VioJjwJ4NG6MoyHpo18iQCN2eQ1znRSkstsYUcyN"
);

const [vaultAuthority] = PublicKey.findProgramAddressSync(
  [Buffer.from("vault-authority")],
  programId
);

console.log("Vault Authority PDA:", vaultAuthority.toBase58());
