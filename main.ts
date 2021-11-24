import { Logger } from "./Sub";
import Pub from "./Pub";

const hub = new Pub();

const sub1 = new Logger();
const sub2 = new Logger();

hub.register(sub1);
hub.register(sub2);

hub.publish("call");
