// create a type for the user
type UserProps = {
  name?: string;
  age?: number;
};

// create a type for the callback function
type callback = () => void;

export class User {
  events: { [key: string]: callback[] } = {};

  // initialize a new user as an object which is in line with the userProps interface
  constructor(private data: UserProps) {}

  // get user or age
  get(propName: string): number | string {
    return this.data[propName];
  }

  // update the age or name of an existing user
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  //create an event listener to perform some action
  on(eventName: string, callback: callback): void {
   
    // check if the events is empty
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    // check to see if there are no callback functions for the event
    if (!handlers || handlers.length === 0) {
      return;
    }
    
    // run all the callbacks for that event
    for (let callback of handlers) {
      callback();
    }
  }
}
