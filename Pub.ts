import Sub from "./Sub";

export default class Pub {
  subs: Sub[] = [];
  register(sub: Sub) {
    this.subs.push(sub);
  }
  publish(event: string) {
    for (const s of this.subs) s.notify(event);
  }
}
