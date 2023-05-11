Two weeks ago, we released [Dolly](https://www.databricks.com/blog/2023/03/24/hello-dolly-democratizing-magic-chatgpt-open-models.html), a large language model (LLM) trained for less than $30 to exhibit ChatGPT-like human interactivity (aka instruction-following). Today, we’re releasing [Dolly 2.0](https://huggingface.co/databricks/dolly-v2-12b), the first open source, instruction-following LLM, fine-tuned on a human-generated instruction dataset licensed for **research and commercial use.**

Dolly 2.0 is a 12B parameter language model based on the [EleutherAI](https://www.eleuther.ai/) [pythia](https://arxiv.org/abs/2304.01373) model family and fine-tuned exclusively on a new, high-quality human generated instruction following dataset, crowdsourced among Databricks employees.

We are open-sourcing the entirety of Dolly 2.0, including the training code, the dataset, and the model weights, all suitable for commercial use. This means that any organization can create, own, and customize powerful LLMs that can talk to people, without paying for API access or sharing data with third parties.

### **databricks-dolly-15k dataset**

**[`databricks-dolly-15k`](https://github.com/databrickslabs/dolly/tree/master/data)** contains 15,000 high-quality human-generated prompt / response pairs specifically designed for instruction tuning large language models. Under the licensing terms for **`databricks-dolly-15k`** ([Creative Commons Attribution-ShareAlike 3.0 Unported License](https://creativecommons.org/licenses/by-sa/3.0/)), anyone can use, modify, or extend this dataset for any purpose, including commercial applications.

To the best of our knowledge, this dataset is the first open source, human-generated instruction dataset specifically designed to make large language models exhibit the magical interactivity of ChatGPT. **`databricks-dolly-15k`** was authored by more than 5,000 Databricks employees during March and April of 2023. These training records are natural, expressive and designed to represent a wide range of the behaviors, from brainstorming and content generation to information extraction and summarization.

### **Why did we create a new dataset?**

As soon as we released Dolly 1.0, we were inundated by requests from people who wanted to try it out. The number one question that we kept getting was “can I use this commercially?”

A critical step in the creation of Dolly 1.0, or any instruction following LLMs, is to train the model on a dataset of instruction and response pairs. Dolly 1.0 was trained for $30 using a dataset that the Stanford Alpaca team had created using the OpenAI API. That dataset contained output from ChatGPT, and as the Stanford team pointed out, the terms of service seek to prevent anyone from creating a model that competes with OpenAI. So, unfortunately, the answer to this common question was, “probably not!”

As far as we know, all the existing well-known instruction-following models ([Alpaca](https://crfm.stanford.edu/2023/03/13/alpaca.html), [Koala](https://bair.berkeley.edu/blog/2023/04/03/koala/), [GPT4All](https://github.com/nomic-ai/gpt4all), [Vicuna](https://vicuna.lmsys.org/)) suffer from this limitation, prohibiting commercial use. To get around this conundrum, we started looking for ways to create a new dataset not “tainted” for commercial use.

### **How did we do it?**

We knew from the OpenAI research [paper](https://arxiv.org/pdf/2203.02155.pdf) that the original InstructGPT model was trained on a dataset consisting of 13,000 demonstrations of instruction following behavior. Inspired by this, we set out to see if we could achieve a similar result with Databricks employees leading the charge.

Turns out, generating 13k questions and answers is harder than it looks. Every answer has to be original. It can’t be copied from ChatGPT or anywhere on the web, or it would taint our dataset.  It seemed daunting, but Databricks has over 5,000 employees who are very interested in LLMs. So we thought we could crowdsource among them to create an even higher quality dataset than the 40 labelers had created for OpenAI. But we knew they were all busy and had full-time jobs, so we needed to incentivize them to do this.

We set up a contest, where the top 20 labelers would get a big award. We also outlined 7 very specific tasks:

-   Open Q&A: For instance, “Why do people like comedy movies?” or “What is the capital of France?” In some cases, there’s not a correct answer, and in others, it requires drawing on knowledge of the world at large.
-   Closed Q&A: These are questions that can be answered using only the information contained in a passage of reference text. For instance, given a paragraph from Wikipedia on the atom, one might ask, “What is the ratio between protons and neutrons in the nucleus?”
-   Extract information from Wikipedia: Here an annotator would copy a paragraph from Wikipedia and extract entities or other factual information such as weights or measurements from the passage.
-   Summarize information from Wikipedia: For this, annotators provided a passage from Wikipedia and were asked to distill it to a short summary.
-   Brainstorming: This task asked for open-ended ideation and an associated list of possible options. For instance, “What are some fun activities I can do with my friends this weekend?”.
-   Classification: For this task, annotators were asked to make judgments about class membership (e.g. are the items in a list animals, minerals or vegetables) or to judge the properties of a short passage of text, such as the sentiment of a movie review.
-   Creative writing: This task would include things like writing a poem or a love letter.

**Example of Open QA in databricks-dolly-15k**

**How do I build a campfire?**

Safety should always come first when starting a campfire. Ensure you have water or another way to extinguish your fire readily available. Use a campfire ring, pit, or clear a large area around your campfire location. Also, make sure campfires are permitted in your area.  

With safety out of the way, all a fire needs are heat, fuel, and oxygen. Any combustible material will start a fire, but good campfire fuel sources include tinder, kindling, and dry logs.

Use stuff like dry pine needles, dry leaves, grasses, and wood shavings for tinder. You could also use newspaper (or any paper), dryer lint, or cardboard. For kindling, use smaller pieces of wood, such as twigs and sticks no thicker than 1 inch in diameter (about the thickness of your thumb).  
  
Dry or well-seasoned logs will ensure a good burn. Stack the wood in a way that guarantees oxygen can easily reach your flame. Many prefer a teepee or log cabin stacking design. Now, use a heat source to create a flame or spark and apply this to your tinder. Once the tinder combusts, it should light the kindling, and the kindling should eventually ignite your logs. If all goes well, you should now be enjoying your campfire.

**Example of Brainstorming in databricks-dolly-15k**

**Instead of making a peanut butter and jelly sandwich, what else could I combine peanut butter with in a sandwich? Give five ideas.**  

Instead of jelly, try one of the following with peanut butter in a sandwich:

1. Honey
2. Raisins
3. Fruit preserves
4. Bananas
5. Sliced apples

We were initially skeptical whether we would get to 10,000 results. But with nightly leaderboard gamification, we managed to break 15,000 results within a week. Out of fear of eating into our productivity, we closed the contest.

### **Our journey to create a commercially viable model**

We also wanted to produce an open source model that can be _commercially used_. Despite **`databricks-dolly-15k`** being substantially smaller than Alpaca, the dataset on which Dolly 1.0 was trained, the resulting Dolly 2.0 model, based on [EleutherAI’s](http://eleuther.ai/) [pythia-12b](https://huggingface.co/EleutherAI/pythia-12b), exhibited high-quality instruction following behavior. In hindsight, this isn’t surprising. Many of the instruction tuning datasets released in recent months contain synthesized data, which often contains hallucinations and factual errors.

**`databricks-dolly-15k`**, on the other hand, is generated by professionals, is high quality, and contains long answers to most tasks.

You can see for yourself some examples of how Dolly 2.0 can be used for summarization and content generation. Based on our initial customer feedback it’s clear capabilities such as these will have wide-ranging applications across the enterprise.

**_Dolly 2.0 summarizes Databricks documentation_**

Instruction

Response

What is the default configuration for new DBSQL warehouses?

Input:

Databricks SQL Serverless supports serverless compute. Admins can create serverless SQL warehouses (formerly SQL endpoints) that enable instant compute and are managed by Databricks. Serverless SQL warehouses use compute clusters in your Databricks account. Use them with Databricks SQL queries just like you normally would with the original customer-hosted SQL warehouses, which are now called classic SQL warehouses. Databricks changed the name from SQL endpoint to SQL warehouse because, in the industry, endpoint refers to either a remote computing device that communicates with a network that it's connected to, or an entry point to a cloud service. A data warehouse is a data management system that stores current and historical data from multiple sources in a business friendly manner for easier insights and reporting. SQL warehouse accurately describes the full capabilities of this compute resource. If serverless SQL warehouses are enabled for your account, note the following: New SQL warehouses are serverless by default when you create them from the UI. New SQL warehouses are not serverless by default when you create them using the API, which requires that you explicitly specify serverless. You can also create new pro or classic SQL warehouses using either method. You can upgrade a pro or classic SQL warehouse to a serverless SQL warehouse or a classic SQL warehouse to a pro SQL warehouse. You can also downgrade from serverless to pro or classic. This feature only affects Databricks SQL. It does not affect how Databricks Runtime clusters work with notebooks and jobs in the Data Science & Engineering or Databricks Machine Learning workspace environments. Databricks Runtime clusters always run in the classic data plane in your AWS account. See Serverless quotas. If your account needs updated terms of use, workspace admins are prompted in the Databricks SQL UI. If your workspace has an AWS instance profile, you might need to update the trust relationship to support serverless compute, depending on how and when it was created.

By default, when you create a new DBSQL warehouse using the UI, it will be a serverless SQL warehouse. However, when creating the same using the API, you will have to explicitly specify that it is a pro SQL warehouse.

 **_Dolly 2.0 generates content for a tweet_**

Instruction

Response

Write me a tweet about the launch of Dolly 2.0, our new LLM.

Dolly 2.0 is here 🤩

We've upgraded our LLM, making it more efficient, more powerful, and more accessible to a broader audience.

Learn more ⬇️

https://t.co/KxzT3HXCPb

### **Truly open large language models**

We’ve heard repeatedly from our customers that they would be best served by owning their models, allowing them to create higher quality models for their domain specific applications without handing their sensitive data over to third parties.

We also believe that the important issues of bias, accountability and AI safety should be addressed by a broad community of diverse stakeholders rather than just a few large companies. Open-sourced datasets and models encourage commentary, research and innovation that will help to ensure everyone benefits from advances in artificial intelligence technology.

As a technical and research artifact, we don't expect Dolly to be state-of-the-art in terms of effectiveness. However, we do expect Dolly and the open source dataset will act as the seed for a multitude of follow-on works, which may serve to bootstrap even more powerful language models.

### **How do I get started today?**

To download Dolly 2.0 model weights simply visit the [Databricks Hugging Face](https://huggingface.co/databricks) page and visit the [Dolly repo on databricks-labs](https://github.com/databrickslabs/dolly/tree/master/data) to download the `**databricks-dolly-15k dataset**`. And join [our webinar](https://www.databricks.com/resources/webinar/build-your-own-large-language-model-dolly?itm_data=dollyblog-intextcta-dollywebinar) to discover how you can harness LLMs for your organization.

### **Resources**

[Fine-Tuning Large Language Models with Hugging Face and Deepspeed](https://www.databricks.com/blog/2023/03/20/fine-tuning-large-language-models-hugging-face-and-deepspeed.html)

[Does One Large Model Rule Them All](https://maithraraghu.com/blog/2023/does-one-model-rule-them-all/) 

[Self-Instruct: Aligning Language Model with Self Generated Instructions](https://arxiv.org/abs/2212.10560)

[Training Language Models to Follow Instructions with Human Feedback](https://arxiv.org/abs/2203.02155)

