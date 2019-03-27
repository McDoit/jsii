using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiByValue]
    public class LoadBalancedFargateServiceProps : ILoadBalancedFargateServiceProps
    {
        [JsiiProperty("containerPort", "{\"primitive\":\"number\",\"optional\":true}", true)]
        public double? ContainerPort
        {
            get;
            set;
        }

        [JsiiProperty("cpu", "{\"primitive\":\"string\",\"optional\":true}", true)]
        public string Cpu
        {
            get;
            set;
        }

        [JsiiProperty("memoryMiB", "{\"primitive\":\"string\",\"optional\":true}", true)]
        public string MemoryMiB
        {
            get;
            set;
        }

        [JsiiProperty("publicLoadBalancer", "{\"primitive\":\"boolean\",\"optional\":true}", true)]
        public bool? PublicLoadBalancer
        {
            get;
            set;
        }

        [JsiiProperty("publicTasks", "{\"primitive\":\"boolean\",\"optional\":true}", true)]
        public bool? PublicTasks
        {
            get;
            set;
        }
    }
}