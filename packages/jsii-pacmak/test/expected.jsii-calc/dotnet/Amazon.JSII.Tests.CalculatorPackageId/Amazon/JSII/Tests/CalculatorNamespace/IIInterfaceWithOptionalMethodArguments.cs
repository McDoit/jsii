using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiInterface(typeof(IIInterfaceWithOptionalMethodArguments), "jsii-calc.IInterfaceWithOptionalMethodArguments")]
    public interface IIInterfaceWithOptionalMethodArguments
    {
        [JsiiMethod("hello", null, "[{\"name\":\"arg1\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"arg2\",\"type\":{\"primitive\":\"number\",\"optional\":true}}]")]
        void Hello(string arg1, double? arg2);
    }
}