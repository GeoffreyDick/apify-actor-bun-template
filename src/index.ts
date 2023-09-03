import { Actor, log, LogLevel } from 'apify'

// Initialize the Apify Actor
await Actor.init()

// Set the log level
log.setLevel(LogLevel.DEBUG)

// Crawl stuff

// Exit the Apify Actor
await Actor.exit()
