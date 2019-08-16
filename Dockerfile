FROM node:latest
# Create the directory!
RUN mkdir -p /usr/src/rm_discord_bot
WORKDIR /usr/src/rm_discord_bot
# Copy and Install our bot
COPY package.json /usr/src/rm_discord_bot
RUN npm install
# Our precious bot
COPY . /usr/src/rm_discord_bot
# Start me!
CMD ["node", "rm_discord_bot.js"]
