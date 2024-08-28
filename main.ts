import { parseArgs } from "@std/cli";

export async function main(rawArgs: string[] = Deno.args) {
  const args = parseArgs(rawArgs, {
    alias: { hello: "H" },
    boolean: ["hello"],
    string: ["_"],
  });

  const rest = args._ as string[];

  if (args.hello) {
    console.log("Hello!");
  }

  console.log(`Args: ${JSON.stringify(rest)}`);
}

if (import.meta.main) {
  await main();
}
