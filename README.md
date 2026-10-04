# ⚡ 4-Bit ALU Step-by-Step Simulator

## 🚀 LIVE DEMO

👉 **[CLICK HERE TO OPEN THE 4-BIT ALU SIMULATOR](https://jayakarthick-2007.github.io/4-bit-ALU-Simulator/)**

---

## 📌 Project Overview

The **4-Bit ALU Step-by-Step Simulator** is an interactive web-based project developed to demonstrate the working of an **Arithmetic Logic Unit (ALU)**, one of the most important components of a CPU.

The simulator accepts two 4-bit binary numbers and performs different arithmetic and logical operations. It also provides a **step-by-step explanation** of how each operation is performed, making it useful for understanding the internal working of an ALU.

---

## 🎯 Objectives

- To understand the basic working of a 4-bit ALU.
- To demonstrate arithmetic and logical operations using binary numbers.
- To visualize binary addition with **carry**.
- To demonstrate subtraction with **borrow**.
- To understand binary multiplication using partial products.
- To understand fundamental logic operations.
- To connect the project with the **Execute Stage of the CPU Instruction Cycle**.

---

## ⚙️ Operations Supported

The simulator performs the following operations:

| Operation | Description |
|---|---|
| ➕ ADD | Binary addition with carry |
| ➖ SUB | Binary subtraction with borrow |
| ✖️ MULTIPLY | Binary multiplication using partial products |
| AND | Bitwise AND operation |
| OR | Bitwise OR operation |
| XOR | Bitwise XOR operation |
| NAND | Bitwise NAND operation |
| NOR | Bitwise NOR operation |
| XNOR | Bitwise XNOR operation |

---

## 🧮 Example

For two 4-bit inputs:

**A = 1101 (13)**  
**B = 0111 (7)**

### Addition

```text
   1101
 + 0111
 -------
  10100

Result = 0100
Carry  = 1

#### 🔍 Step-by-Step Learning

The simulator provides detailed steps for:

Binary addition
Carry generation and propagation
Binary subtraction
Borrow calculation
Binary multiplication
Partial products
Bitwise logic operations
Final 4-bit result

This makes the project useful not only as a calculator but also as a learning tool for Computer Organization and Architecture.

##### 🖥️ Technologies Used :

HTML5 – Website structure
CSS3 – User interface and styling
JavaScript – ALU operations and step-by-step simulation
GitHub Pages – Website deployment

###### 🏗️ Project Architecture :

          Input A (4-bit)
                │
                ▼
          ┌─────────────┐
          │             │
Input B → │    4-Bit    │
          │     ALU     │
          │             │
          └──────┬──────┘
                 │
                 ▼
        Selected Operation
                 │
                 ▼
       Step-by-Step Processing
                 │
                 ▼
       Result + Carry/Borrow

####### 🧠 Relation to CPU

The ALU is a major component of the CPU and is mainly involved in the Execute stage of the instruction cycle.

Fetch → Decode → EXECUTE → Memory → Write Back
                    │
                    ▼
                   ALU
This project demonstrates how the ALU performs arithmetic and logical operations during the execution of an instruction

######## 👥 Team Members :

| S.No. | Team Member        |
| ----- | ------------------ |
| 1     | **JAYAKARTHICK A** |
| 2     | **SIVAGURU N**     |
