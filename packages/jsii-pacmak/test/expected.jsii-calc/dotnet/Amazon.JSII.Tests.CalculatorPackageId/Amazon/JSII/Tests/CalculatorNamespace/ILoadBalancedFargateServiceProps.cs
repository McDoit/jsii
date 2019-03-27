using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiInterface(typeof(ILoadBalancedFargateServiceProps), "jsii-calc.LoadBalancedFargateServiceProps")]
    public interface ILoadBalancedFargateServiceProps
    {
        [JsiiProperty("containerPort", "{\"primitive\":\"number\",\"optional\":true}")]
        double? ContainerPort
        {
            get;
        }

        [JsiiProperty("cpu", "{\"primitive\":\"string\",\"optional\":true}")]
        string Cpu
        {
            get;
        }

        [JsiiProperty("memoryMiB", "{\"primitive\":\"string\",\"optional\":true}")]
        string MemoryMiB
        {
            get;
        }

        [JsiiProperty("publicLoadBalancer", "{\"primitive\":\"boolean\",\"optional\":true}")]
        bool? PublicLoadBalancer
        {
            get;
        }

        [JsiiProperty("publicTasks", "{\"primitive\":\"boolean\",\"optional\":true}")]
        bool? PublicTasks
        {
            get;
        }
    }
}