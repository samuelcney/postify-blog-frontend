declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SECRET_KEY: string;
    NODE_ENV: "development" | "production" | "test";
  }
}
