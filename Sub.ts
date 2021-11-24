export default class Sub {
  notify(event: string) {}
}

export class Logger {
  notify(event: string) {
    console.log(`[${new Date()}]: `, event);
  }
}
