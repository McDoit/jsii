using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace.LibNamespace
{
    [JsiiInterface(typeof(IIDoublable), "@scope/jsii-calc-lib.IDoublable")]
    public interface IIDoublable
    {
        [JsiiProperty("doubleValue", "{\"primitive\":\"number\"}")]
        double DoubleValue
        {
            get;
        }
    }
}