using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiByValue]
    public class InterfaceImplementedByAbstractClass : IInterfaceImplementedByAbstractClass
    {
        [JsiiProperty("propFromInterface", "{\"primitive\":\"string\"}", true)]
        public string PropFromInterface
        {
            get;
            set;
        }
    }
}