import { Analytics, Logger } from "./Sub";
import Pub from "./Pub";

const hub = new Pub();

const sub1 = new Logger();
const sub2 = new Logger();
const sub3 = new Analytics();

sub1.register(sub2);
hub.register(sub3);
hub.register(sub1);

hub.publish("call");
hub.publish("call");
