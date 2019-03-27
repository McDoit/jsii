using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiInterface(typeof(IIInterfaceThatShouldNotBeADataType), "jsii-calc.IInterfaceThatShouldNotBeADataType")]
    public interface IIInterfaceThatShouldNotBeADataType : IIInterfaceWithMethods
    {
        [JsiiProperty("otherValue", "{\"primitive\":\"string\"}")]
        string OtherValue
        {
            get;
        }
    }
}