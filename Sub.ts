import Pub from "./Pub";

export default interface Sub {
  notify: (event: string) => any;
}

export class Logger extends Pub implements Sub {
  notify(event: string) {
    console.log(`[${new Date()}]: `, event);
    this.publish(event + " (nested)");
  }
}

export class Analytics extends Pub implements Sub {
  count: Map<string, number> = new Map();
  notify(event: string) {
    this.count.set(event, (this.count.get(event) || 0) + 1);
    console.log(`Analytics: ${event} count = ${this.count.get(event)}`);
    this.publish(event);
  }
}
