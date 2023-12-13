/* eslint-disable no-unused-vars */
// /// <reference types="Cypress" />

// import type Credentials from "../fixtures/user.credentials.json";

// interface FixtureTypes {
//   credentials: typeof Credentials;
//   // Add other fixtures here
// }

// declare global {
//   namespace Cypress {
//     interface Chainable {
//       fixture<K extends keyof FixtureTypes>(
//         fixtureName: K,
//       ): Chainable<FixtureTypes[K]>;
//     }
//   }
// }

interface Credentials {
  username: string;
  password: string;
}

export interface Users {
  standard_user: Credentials;
  locked_out_user: Credentials;
  problem_user: Credentials;
  performance_glitch_user: Credentials;
  error_user: Credentials;
  visual_user: Credentials;
}
