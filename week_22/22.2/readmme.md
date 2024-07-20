# Horizontal scaling

Horizontal scaling represents increasing the number of instances you have based on a metric to be able to support more load.
AWS has the concept of `Auto scaling groups`, which as the name suggests lets you autoscale the number of machines based on certain metrics.

1. Create an Instance on AWS, give it a name, select ubuntu, instance type->t2.micro, create a new key-pair file, launch instance

```bash
chmod 700 `pem_file_name`
ssh -i `pem_file_name` ubuntu@address
```

install node.js on this machine

```bash
$ curl -0- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
$ nvm install node
$ git clone `url`
$
```

add inbound rule on aws, add 3000 port also

2. create an image
   now if many people hit this url, it will be screwed

to avoid-> instance>actions>images and templates>create image
it is snapshot of the machine at that point

3. create security group
   aws console>security groups>create security group> name, inbound rules, anything on port 3000,22 should be allowed
   create security group

4. Launch template bash->

```bash
#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v22.0.0/bin/
echo "hi there before"
echo "hi there after"
npm install -g pm2
cd /home/ubuntu/week-22
pm2 start index.js
pm2 save
pm2 startup
```

5. create autoscaling group
-Callout on availability zones - ASGs try to balance instances in each zones.
<ul class="notion-list notion-list-disc notion-block-c5e46884527c4f30b75130e064d71823"><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-947df69ec4844a3e897d2ade03c043a9"><div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fac0ac67a-e59b-4276-b2e9-7737d579372d%2FScreenshot_2024-04-28_at_2.58.46_PM.png?table=block&amp;id=947df69e-c484-4a3e-897d-2ade03c043a9&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div></figure></ul>
6. create load balancer
   -Add an HTTPS Listener from your domain, request a certificate from ACM
7. Target group - Attach the target group to the ASG

## Autoscaling part

You can create an `dynamic scaling` policy

<figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-8badc8c929154bf1a819373604aee18c"><div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F05934146-4089-402c-b8e7-9a609ae9b85f%2FScreenshot_2024-04-28_at_3.18.57_PM.png?table=block&amp;id=8badc8c9-2915-4bf1-a819-373604aee18c&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div></figure>

Try laying with min and max on ASG

<figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-e49eb5ba85084c0bbeebb1f59f05cf4d"><div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F1b3975f3-49ca-4289-914f-508cfdedbefc%2FScreenshot_2024-04-28_at_3.19.44_PM.png?table=block&amp;id=e49eb5ba-8508-4c0b-beeb-b1f59f05cf4d&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div></figure>

## Try killing servers

Try to stop a few servers in the ASG. Notice they spin back up to arrive at the desired amount.

## Simulate a scale up

Try running an infinite for loop on the instance to see if a scale up happens
You’ll notice the desired capacity goes up by one in some time.
Try turning the infinite loop off and notice a scale down happens

## Scaling via a Node.js app

Create a new user with permissions to `AutoscalingFullAccess`

<div class="notion-row notion-block-1de725c02be042b8bad7e449ab064d0f"><div class="notion-column notion-block-d3867dd23e674de1bf873fa0f04f027a" style="width: calc((100% - 1 * min(32px, 4vw)) * 0.5);"><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-e08c3c221ce949c88ba5aa95de6ee445"><div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F2d03a8da-3834-4793-9c77-35dbac3ea977%2FScreenshot_2024-04-28_at_5.50.52_PM.png?table=block&amp;id=e08c3c22-1ce9-49c8-8ba5-aa95de6ee445&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div></figure></div><div class="notion-spacer"></div><div class="notion-column notion-block-7c61f3bae40443daaf95212d515aa63d" style="width: calc((100% - 1 * min(32px, 4vw)) * 0.5);"><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-6c7c245299b94806b83ffd30f2b41975"><div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe008a297-24d1-4cad-9586-06da2c6ce578%2FScreenshot_2024-04-28_at_5.58.12_PM.png?table=block&amp;id=6c7c2452-99b9-4806-b83f-fd30f2b41975&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div></figure></div><div class="notion-spacer"></div></div>

```ts
import AWS from "aws-sdk";

AWS.config.update({
  region: "ap-south-1",
  accessKeyId: "YOUR_ACCESS_KEY",
  secretAccessKey: "YOUR_ACCESS_SECRET",
});

// Create an Auto Scaling client
const autoscaling = new AWS.AutoScaling();

// Function to update the desired capacity of an Auto Scaling group
const updateDesiredCapacity = (
  autoScalingGroupName: string,
  desiredCapacity: number,
) => {
  const params = {
    AutoScalingGroupName: autoScalingGroupName,
    DesiredCapacity: desiredCapacity,
  };

  autoscaling.setDesiredCapacity(params, (err, data) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
};

// Example usage
const groupName = "node-app-1"; // Set your Auto Scaling group name
const newDesiredCapacity = 3; // Set the new desired capacity

// Call the function
updateDesiredCapacity(groupName, newDesiredCapacity);
```

## Cleanup

Please delete all things one by one
ASG
Target group
Load balancer
Launch template
Image
Instance that the image was created from
