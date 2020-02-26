namespace some.namespace {
    export class Parent {
        constructor(private child: some.nested.namespace.Child = new nested.namespace.Child()) {
        }

        public start(): void {
            alert(this.child.start())
        }
    }
}