using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiInterface(typeof(IInterfaceImplementedByAbstractClass), "jsii-calc.InterfaceImplementedByAbstractClass")]
    public interface IInterfaceImplementedByAbstractClass
    {
        [JsiiProperty("propFromInterface", "{\"primitive\":\"string\"}")]
        string PropFromInterface
        {
            get;
        }
    }
}