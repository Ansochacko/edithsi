---
id: "glossary"
lang: "en"
slug: "ai-training-glossary-rlhf-evals-rubrics"
title: "AI-Training Glossary: RLHF, Evals, Rubrics & Expert Prompts"
metaTitle: "AI-Training Glossary: RLHF, Evals, Rubrics & SFT Explained"
metaDescription: "Plain-English glossary of AI-training terms for lawyers, doctors, engineers, and linguists: RLHF, rubrics, model evals, SFT, and Golden responses."
targetKeyword: "rlhf jobs"
cluster: "ai-training-concepts"
intent: "informational"
hubSlug: "/ai-training-for-doctors/"
hubTitle: "AI-Training Work for Doctors & Clinicians"
relatedSlugs:
  - "/mercor-ai-interview-guide/"
  - "/mercor-vs-outlier-vs-micro1/"
  - "/is-mercor-legit-review/"
datePublished: "2026-11-05"
dateModified: "2026-11-05"
checkedOn: "2026-11-05"
reviewStatus: "APPROVED"
draft: false
faqs:
  - question: "Do I need a machine learning degree to apply for RLHF jobs?"
    answer: "No. Frontier labs hire lawyers, clinicians, finance professionals, linguists, and software engineers for their domain mastery, not to write neural network training loops."
  - question: "What do domain experts actually do in AI-training contract roles?"
    answer: "AI-training platforms need domain specialists to write prompts, evaluate model outputs against structured rubrics, and verify step-by-step reasoning."
  - question: "Can I share examples of the exact prompts or rubrics I work on?"
    answer: "No. Contractors sign strict non-disclosure agreements (NDAs) that prohibit sharing client-specific rubrics, model outputs, or internal project names."
  - question: "Are posted hourly rates for RLHF and evaluation roles guaranteed?"
    answer: "No. All posted rates on 2026-11-05 are ranges, not guaranteed; applying is free, and many applicants wait weeks or receive no project offer."
sources:
  - label: "OpenAI Research — Training Language Models to Follow Instructions with Human Feedback (InstructGPT)"
    url: "https://arxiv.org/abs/2203.02155"
  - label: "NIST — Artificial Intelligence Risk Management Framework (AI Evaluation & TEVV)"
    url: "https://www.nist.gov/itl/ai-risk-management-framework"
---

> **Commercial Advertising Disclosure (`AD`):** I run Edithsi independently as a Finland-based Mercor contractor. Outbound links to Mercor on this page contain my referral code (`02e0c12a-d634-4738-9686-04f28f31f52b`) and constitute commercial advertising (`AD`). If you apply through my link and are hired onto a project, I may earn a referral bonus at no cost to you. My non-disclosure agreement (NDA) prevents me from sharing client-specific project details.

**When you apply for remote RLHF jobs and expert AI-training contracts, you do not need a machine-learning degree to understand the terminology—you simply need to know how your professional judgment translates into writing prompts, grading model outputs, and verifying reasoning.** This plain-English glossary explains every core concept—from Supervised Fine-Tuning (SFT) and Reinforcement Learning from Human Feedback (RLHF) to rubrics and model evaluations (evals)—so doctors, lawyers, engineers, finance specialists, and linguists know what the work entails before applying.

---

## Why Frontier AI Labs Need Credentialed Domain Specialists

Early large language models learned by predicting the next word across billions of public web pages. While pre-training gave models broad fluency, it could not teach a model how to reason reliably through a differential diagnosis, spot a statutory conflict in a commercial contract, audit a corporate balance sheet, or refactor production software without introducing subtle bugs.

Today, post-training relies heavily on human experts. Whether you are exploring [AI-Training Work for Doctors & Clinicians](/ai-training-for-doctors/) (`$60–180/h` posted range on `2026-11-05`, not guaranteed), licensed legal pools (`$100–150/h` posted range on `2026-11-05`, not guaranteed), or software engineering listings (`$70–150/h` posted range on `2026-11-05`, not guaranteed), the core mission is identical: **AI-training platforms need domain specialists to write prompts, evaluate model outputs, and verify reasoning.** Because my NDA prevents me from sharing client-specific project details, every example below uses standard, publicly documented machine-learning concepts.

---

## Quick Reference Table: AI-Training Concepts vs. Day-to-Day Specialist Tasks

| AI-Training Term | Plain-English Definition | What a Domain Specialist Actually Does Day-to-Day |
| :--- | :--- | :--- |
| **RLHF** *(Reinforcement Learning from Human Feedback)* | Training a reward model using human comparisons between two or more AI responses so the model learns expert preferences. | Compare Response A vs. Response B side-by-side, score both across accuracy and tone, and write a rigorous rationale explaining which is better. |
| **SFT** *(Supervised Fine-Tuning / "Golden" Responses)* | Teaching a model by showing it ideal, human-written demonstrations of how to solve complex domain problems. | Write a challenging prompt and craft a flawless "Golden" reference answer—or rewrite a flawed model draft until it meets professional standards. |
| **Rubrics** *(Multi-Criteria Grading)* | A granular checklist of objective, binary or weighted criteria used to score whether a model response succeeded or failed. | Deconstruct a complex question into 5–15 verifiable criteria (e.g., "Mentions contraindication X," "Uses IFRS standard Y") and grade outputs against each item. |
| **Evals** *(Model Evaluations & Benchmarks)* | Standardized test suites designed to measure where a frontier model's reasoning breaks down across specialized disciplines. | Author difficult, original problem sets with unambiguous ground-truth answers that current models fail to solve reliably. |
| **Prompt Engineering for Failure Modes** | Designing realistic, high-complexity user queries that expose gaps in logic, calculation, or domain knowledge. | Craft multi-constraint case scenarios (clinical vignettes, multi-file code bugs, regulatory edge cases) that induce a model error. |
| **Chain-of-Thought (CoT) / Process Supervision** | Evaluating every intermediate reasoning step a model takes rather than only checking its final conclusion. | Inspect the model's step-by-step scratchpad to pinpoint the exact line where a legal deduction, mathematical proof, or clinical calculation went wrong. |
| **Hallucination & Citation Verification** | Auditing factual claims, statutory citations, API references, and numerical figures against authoritative primary sources. | Verify every cited case law, medical guideline, financial formula, or software library call to confirm nothing was fabricated. |

---

## Core Glossary: 7 Essential Concepts Explained

### 1. RLHF (Reinforcement Learning from Human Feedback)
When people search for "RLHF jobs," they usually mean **preference ranking** (pairwise comparison). You submit a domain prompt and the platform generates two anonymous responses from different model checkpoints—often labeled `Model A` and `Model B`.

Your job as a specialist is to evaluate both outputs objectively:
- Did `Model A` reach the correct clinical, legal, or technical conclusion while `Model B` missed a critical edge case?
- Did one response hallucinate a non-existent statute or deprecated API method?
- After scoring dimensions like truthfulness, instruction following, and completeness, you select a preference rating and write a concise, evidence-backed justification.

### 2. SFT (Supervised Fine-Tuning) and "Golden" Responses
Alongside RLHF, models undergo **Supervised Fine-Tuning (SFT)**. Instead of choosing between two machine outputs, SFT requires a human specialist to produce the **Golden response**—the ideal reference answer that a seasoned professional would deliver. Depending on the workflow, you either draft an expert response from scratch or take a model's flawed draft and rewrite it into a 100%-verified Golden response.

### 3. Rubrics and Multi-Criteria Grading
Modern AI evaluation relies heavily on **structured rubrics** rather than subjective star ratings. When you build a rubric for a domain prompt, you break the ideal answer down into atomic, verifiable criteria:
- **Self-contained and objective:** Two independent doctors, lawyers, or engineers grading the same response against your rubric should reach the exact same pass/fail score.
- **Weighted by importance:** Critical requirements (such as identifying a life-threatening drug interaction or fixing a security vulnerability) carry heavy weights, while minor formatting items carry lower weights.

Strong analytical rubric skills are also tested during screening—read my [Mercor AI Interview & Vetting Guide](/mercor-ai-interview-guide/) to prepare.

### 4. Evals (Model Evaluations and Frontier Benchmarks)
**Evals** are the standardized exams of artificial intelligence. Because public exams (like bar exams or medical licensing sample questions) are already in training data, labs contract credentialed experts to write **contaminant-free, original eval questions**. You design a novel problem from scratch, prove the ground-truth answer is indisputable, and verify that current frontier models fail to solve it perfectly.

### 5. Prompt Engineering for Domain Failure Modes
In expert AI-training contracts, prompt engineering often means **designing realistic prompts that expose a model's failure modes**:
- **Law:** Drafting a multi-jurisdictional contract clause where a general rule has a narrow statutory exception.
- **Medicine:** Presenting a patient history where the textbook first-line treatment is contraindicated by a secondary lab value.
- **Software Engineering:** Providing a multi-file repository bug where fixing a surface type error breaks concurrency invariants.
- **Finance:** Supplying a cash-flow table with subtle working-capital adjustments that trip up automated formulas.

### 6. Chain-of-Thought (CoT) and Process Supervision
Reasoning models generate an explicit step-by-step derivation—called a **Chain of Thought (CoT)**—before outputting their final conclusion. In **process supervision**, you inspect each reasoning step individually, marking valid deductions and flagging the exact line where a calculation or logical inference diverged from reality.

### 7. Hallucination Detection and Primary-Source Grounding
A **hallucination** occurs when a model generates fluent text that is factually false or unsupported by the provided context. Specialists verify both **closed-book tasks** (confirming the model used only the attached contract, clinical chart, or filing) and **open-book tasks** (verifying that cited statutes, studies, or software packages actually exist).

---

## How to Choose the Right Pool for Your Credentials

Understanding this glossary helps you pick the public listing that matches your strengths. You can compare platforms in my [Mercor vs. Outlier vs. micro1 Comparison](/mercor-vs-outlier-vs-micro1/) and read my [honest review of whether Mercor is legit](/is-mercor-legit-review/).

When browsing [Mercor's general listing directory](https://t.mercor.com/Pq3VD?referralCode=02e0c12a-d634-4738-9686-04f28f31f52b) (`referral link · ad`) or my [Open Roles page](/roles/), remember the facts checked on `2026-11-05`: applying is free, work is not guaranteed, posted rates are ranges (not guaranteed), and contractors are paid in US dollars via Stripe.
