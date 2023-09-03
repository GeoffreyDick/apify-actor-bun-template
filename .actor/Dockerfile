FROM oven/bun AS builder
WORKDIR /app

COPY package.json ./
COPY bun.lockb ./

RUN bun install

COPY . ./

RUN bun run build

FROM oven/bun AS runner

COPY package.json ./
COPY bun.lockb ./

RUN bun install --production --silent --no-progress \
    && echo "Installed Bun packages" \
    && echo "Bun version: $(bun --version)"

COPY --from=builder /app/dist ./dist

COPY . ./

CMD ["bun", "run", "start:prod"]
