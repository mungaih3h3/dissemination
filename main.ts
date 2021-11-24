import { Analytics, Audit, Logger } from "./Sub";
import Pub from "./Pub";

const node0 = new Pub();

const node1 = new Logger();
const node2 = new Logger();
const node3 = new Analytics();
const node4 = new Audit();

node1.register(node2);
node2.register(node4);
node0.register(node3);
node0.register(node1);

node0.publish("call");
// node0.publish("call");
