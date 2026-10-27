---
title: "Day 2: Optimized Two Sum & ML Intro"
date: 2026-10-27
tags: ["ML", "DSA", "Learning in Public", "Python"]
categories: ["Study Log"]
ShowToc: true
draft: false
cover:
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop"
    alt: "Abstract data matrix"
    caption: "Day 2 of the 6-Month Grind."
---

Day 2 was a weird one. I overslept, lost half the day, and completely shifted my schedule. But I still managed to get the green checkmark on LeetCode and dive deep into Machine Learning concepts.

Here is the breakdown of what I actually accomplished today.

> 📄 **[Download my complete Day 2 Notes here (PDF)](/pdfs/day-2-notes-dsa-ml.pdf)**
> *(Includes the Hash Map breakdown and ML classification table)*

## 1. DSA: Optimizing "Two Sum" to O(n)
Yesterday, I solved "Two Sum" using the brute-force method (nested loops), which resulted in O(n²) time complexity. It worked, but it was slow.

Today, I optimized it using a **Hash Map** (a Python Dictionary). 
*   Instead of checking every number against every other number, I loop through the array once.
*   I calculate the "complement" (target - current number) and check if it's in the dictionary.
*   If it is, I return the indices. If not, I add the current number to the dictionary.
*   **Result:** Time complexity dropped from O(n²) to **O(n)**.

*Note: I also officially switched my DSA resource from the YouTube playlist to the structured web platform at `dsa.chaicode.com` for better organization.*

## 2. Machine Learning: Core Concepts
I continued the CampusX playlist. The focus today was on understanding exactly how models learn and the different problems they solve. Here are my notes on the implementation concepts:

### Supervised Learning
The model learns from **labeled data** (input + correct answer). We teach it by showing it the answers. 
*   **Regression:** Predicting a *continuous number* (e.g., predicting house prices based on square footage). 
    *   *Types of Regression:* Linear Regression, Ridge/Lasso Regression, Polynomial Regression.
*   **Classification:** Predicting a *discrete category* (e.g., deciding if an email is "Spam" or "Not Spam"). We use algorithms like Logistic Regression, Decision Trees, and SVM.

### Unsupervised Learning
The model learns from **unlabeled data**. There are no right answers provided; it has to find patterns on its own.
*   **Dimensionality Reduction:** Reducing the number of features in a dataset while keeping as much information as possible. (e.g., PCA - Principal Component Analysis).
*   **Anomaly Detection:** Finding rare items, events, or observations which raise suspicions by differing significantly from the majority of the data. (e.g., Credit card fraud detection).
*   **Association Rule Learning:** Discovering rules that describe large portions of the data. (e.g., "People who bought X also bought Y" — the classic Amazon recommendation engine).

## 3. Statistics: Skipped
I had to drop my Statistics block today. Because of the late start and the schedule shift, trying to cram Stats into the evening would have caused a burnout. 

I am keeping the hard stop boundary. It's better to skip a block and return to it tomorrow with a fresh mind than to half-ass it at 11 PM.

## 4. The Reality Check (Adapting)
Consistency doesn't mean doing everything perfectly every day; it means doing *something* and showing up. I dropped Stats, but I nailed the code and the ML theory. That's a win.



---

## Connect with Me

*   🌐 **Portfolio:** https://omparhad.github.io
*   📚 **Fiction Blog:** https://omparhadz.blogspot.com
*   ✍️ **Medium:** https://omparhad.medium.com
*   💼 **LinkedIn:** https://linkedin.com/in/omparhad
*   🐦 **X (Twitter):** https://x.com/om_parhad
*   👨‍💻 **Peerlist:** https://peerlist.io/omparhad
*   🐙 **GitHub:** https://github.com/omparhad
*   📧 **Email:** omparhad@proton.me
