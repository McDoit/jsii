using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace.BaseNamespace
{
    [JsiiTypeProxy(typeof(Base), "@scope/jsii-calc-base.Base")]
    internal sealed class BaseProxy : Base
    {
        private BaseProxy(ByRefValue reference): base(reference)
        {
        }
    }
}