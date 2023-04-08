FROM jarredsumner/bun:edge
COPY . .
RUN mkdir -p /opt/logs/pm2/ && touch /opt/logs/pm2/bun_server_hono-out.log && touch /opt/logs/pm2/bun_server_hono-error.log
RUN bun install
EXPOSE 3000
CMD ["bun" ,"run", "start" ] 