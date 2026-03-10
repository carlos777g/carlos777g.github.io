/**
 * Terminal Data Sequences
 * Defines the commands and their respective outputs for the animation loop.
 */
export const TERMINAL_SEQUENCES = [
  {
    command: "sudo apt install carworks",
    output: [
      "Reading package lists... Done",
      "Building dependency tree... Done",
      "Fetching carworks-core modules... 100%",
      "Unpacking developer environment...",
      "Installation successful. Welcome to the system."
    ],
  },
  {
    command: "cat about-me.txt",
    output: [
      "-------------------------------------",
      "USER: Carlos Guillen",
      "ROLE: Telematics Engineer & Full-Stack",
      "STATUS: Building reliable, scalable systems.",
      "MISSION: Transform complex problems into elegant code.",
      "-------------------------------------"
    ],
  },
  {
    command: "npm run deploy --production",
    output: [
      "> carworks-portfolio@1.0.0 deploy",
      "> Compiling assets...",
      "✓ UI Components rendered",
      "✓ Network protocols verified",
      "Deploy successful! Ready for new challenges."
    ],
  }
];