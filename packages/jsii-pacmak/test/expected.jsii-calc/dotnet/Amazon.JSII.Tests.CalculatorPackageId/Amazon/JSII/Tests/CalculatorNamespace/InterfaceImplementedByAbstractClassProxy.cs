using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiTypeProxy(typeof(IInterfaceImplementedByAbstractClass), "jsii-calc.InterfaceImplementedByAbstractClass")]
    internal sealed class InterfaceImplementedByAbstractClassProxy : DeputyBase, IInterfaceImplementedByAbstractClass
    {
        private InterfaceImplementedByAbstractClassProxy(ByRefValue reference): base(reference)
        {
        }

        [JsiiProperty("propFromInterface", "{\"primitive\":\"string\"}")]
        public string PropFromInterface
        {
            get => GetInstanceProperty<string>();
        }
    }
}