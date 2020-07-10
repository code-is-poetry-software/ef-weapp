import { EventEmitter } from "events";
import TypedEmitter from "typed-emitter";

interface MessageEvents {
  mobile: () => void;
  login: () => void;
}

export const event = new EventEmitter() as TypedEmitter<MessageEvents>;
