///!MATCH_ERROR: Method and non-static non-readonly property names must use camelCase: METHOD

export class MyClass {
    public METHOD() {
        return "hi";
    }
}
