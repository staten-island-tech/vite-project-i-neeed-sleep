
# 🧠 Lesson Plan: Understanding Binary, Bits, Bytes, and Hexadecimal

### 🎯 **Learning Goals (SWBAT)**

Students will be able to:

* Explain why computers use binary to represent data.
* Convert between binary and decimal.
* Understand how binary represents electrical signals (on/off).
* Describe bits and bytes as basic units of digital information.
* Use powers of two to understand how binary numbers are built.
* Identify how hexadecimal simplifies binary representation.
* Relate these concepts to **AP Computer Science Principles Big Idea 2: Data** and **Big Idea 4: Systems and Networks**.

---

## 🧩 **1. Introduction — Why Computers Speak “Binary”**

Imagine you have a light switch. It can only be in **two states**:

* 💡 **On**
* 🌑 **Off**

Computers are made of billions of microscopic switches called **transistors** that behave the same way!
Each switch represents **one bit** (short for *binary digit*):

* `1` means **on** (electrical current is flowing)
* `0` means **off** (no electrical current)

This is the foundation of how a computer stores and processes everything — numbers, letters, images, and even videos.

---

## ⚙️ **2. Binary Numbers**

Binary is a **base-2** system.
That means instead of using ten digits (0–9) like in our **decimal system**, binary only uses **two** digits: `0` and `1`.

### Example:

Let’s count in binary:

| Decimal | Binary |
| ------- | ------ |
| 0       | 0      |
| 1       | 1      |
| 2       | 10     |
| 3       | 11     |
| 4       | 100    |
| 5       | 101    |
| 6       | 110    |
| 7       | 111    |
| 8       | 1000   |

Each time you move to the left, the value doubles — just like place values in decimal go up by tens.

| Place Value (Binary)  | 8                             | 4 | 2 | 1 |
| --------------------- | ----------------------------- | - | - | - |
| Example Binary Number | 1                             | 0 | 1 | 1 |
| Multiply & Add        | (1×8) + (0×4) + (1×2) + (1×1) |   |   |   |
| Decimal Value         | **11**                        |   |   |   |

---

## ⚡ **3. How Binary Represents Electrical Signals**

Inside a CPU:

* A **high voltage** (electricity is flowing) → `1`
* A **low voltage** (no electricity) → `0`

These signals travel through millions of circuits that can combine and compare them to perform math, make decisions, and control other parts of the computer.

### Analogy:

Think of binary like a set of light switches that control a robot:

```
Switch 1:  ON (1)
Switch 2:  OFF (0)
Switch 3:  ON (1)
```

The robot might read that as “move forward!” Different combinations of 1s and 0s tell the computer to do different things.

---

## 🧱 **4. Bits and Bytes**

A **bit** (binary digit) is the smallest piece of information a computer can store — a single **1** or **0**.

But one bit alone can only store **two possibilities**. So computers group bits together into **bytes** to represent larger numbers and symbols.

* **1 byte = 8 bits**
* 8 bits can represent **256 different combinations** (`2⁸ = 256`)

| Size            | Name        | Number of Bits |
| --------------- | ----------- | -------------- |
| 1 bit           | Bit         | 1              |
| 1 byte          | Byte        | 8              |
| 1 kilobyte (KB) | 1,024 bytes | 8,192 bits     |
| 1 megabyte (MB) | 1,024 KB    | 8,388,608 bits |

That’s why computer files are measured in bytes — the more bytes, the more bits, and the more information!

---

## 📊 **5. Binary and Powers of Two**

Every position in a binary number represents a **power of 2**, starting from the right (2⁰).
Each position doubles as you move left.

| Power of 2   | 2⁷  | 2⁶ | 2⁵ | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |
| ------------ | --- | -- | -- | -- | -- | -- | -- | -- |
| Value        | 128 | 64 | 32 | 16 | 8  | 4  | 2  | 1  |
| Example Bits | 1   | 1  | 1  | 1  | 1  | 1  | 1  | 1  |

In this example, every bit is turned **on (1)**, so we add up all the values:

`128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255`

That’s the largest number you can represent with **8 bits (1 byte)** — `11111111` in binary equals **255 in decimal**.

---

## 🧮 **6. Binary Conversion Chart**

| Decimal | Binary | Decimal | Binary |
| ------- | ------ | ------- | ------ |
| 0       | 0000   | 8       | 1000   |
| 1       | 0001   | 9       | 1001   |
| 2       | 0010   | 10      | 1010   |
| 3       | 0011   | 11      | 1011   |
| 4       | 0100   | 12      | 1100   |
| 5       | 0101   | 13      | 1101   |
| 6       | 0110   | 14      | 1110   |
| 7       | 0111   | 15      | 1111   |

---

## 🧾 **7. Introducing Hexadecimal**

Binary is great for computers, but it’s **hard for humans to read** — long strings of 1s and 0s are confusing.

To make it easier, we use **hexadecimal** (base-16):

* Uses digits `0–9` and letters `A–F`.
* Each **hex digit = 4 binary digits (bits)**.

| Binary | Hex | Decimal |
| ------ | --- | ------- |
| 0000   | 0   | 0       |
| 0001   | 1   | 1       |
| 0010   | 2   | 2       |
| 0011   | 3   | 3       |
| 0100   | 4   | 4       |
| 0101   | 5   | 5       |
| 0110   | 6   | 6       |
| 0111   | 7   | 7       |
| 1000   | 8   | 8       |
| 1001   | 9   | 9       |
| 1010   | A   | 10      |
| 1011   | B   | 11      |
| 1100   | C   | 12      |
| 1101   | D   | 13      |
| 1110   | E   | 14      |
| 1111   | F   | 15      |

### Example:

`10101100` in binary → break into two groups: `1010 1100`
`1010` = A, `1100` = C
So `10101100` = **AC** in hexadecimal!

---

## 🧠 **8. Why It Matters (AP CSP Connections)**

**Big Idea 2: Data**

* Everything in computing — text, sound, images — is represented digitally using bits.
* Larger units (bytes, kilobytes, etc.) store more complex data.

**Big Idea 4: Systems and Networks**

* The hardware of a computer interprets electrical signals as binary bits (on/off).
* Data travels across systems using binary codes that machines understand.

---

## 🎨 **9. Practice**

1. Convert `1101` to decimal.
2. Convert `13` to binary.
3. Convert binary `11111111` to hexadecimal.
4. Why do you think we use hexadecimal instead of binary for things like color codes (`#FF5733`)?
5. What’s the largest decimal number you can represent with 8 bits?

---

## 🧩 **10. Extension Challenge**

Write your initials using binary or hexadecimal!
Example:

* “A” in ASCII = `65` decimal = `01000001` binary = `41` hex

---

## 👩‍🏫 **Teacher Notes & Accommodations**

* Provide **color-coded manipulatives** (blue = 1, gray = 0).
* Allow use of **binary-to-decimal charts** for support.
* For visual learners, show an animation of **bits lighting up** (powers of two).
* For kinesthetic learners, use **physical cards labeled 128, 64, 32, etc.** to flip up/down for 1s and 0s.
* For auditory learners, connect binary patterns to **beats or rhythm patterns** (“on = clap, off = pause”).

---



# 💻 Lesson: Algorithms in Action — Binary Conversions

### 🎯 **Learning Goals (SWBAT)**

Students will be able to:

* Explain what an **algorithm** is and how it solves problems step-by-step.
* Identify the three building blocks of algorithms: **sequencing, selection, and iteration**.
* Understand how algorithms appear in code that converts between **binary** and **decimal** numbers.
* Describe how binary conversion algorithms demonstrate **AP CSP Big Idea 3: Algorithms and Programming**.

---

## 🧠 **1. What Is an Algorithm?**

An **algorithm** is just a **set of instructions** that a computer (or person) can follow to solve a problem.

🧩 **Example (real life)**:
Making a peanut butter sandwich is an algorithm!

1. Get two slices of bread.
2. Spread peanut butter on one slice.
3. Spread jelly on the other slice.
4. Put them together.

That’s a **sequence of steps** the same way a computer follows lines of code.

---

## ⚙️ **2. The Three Key Parts of an Algorithm**

| Part           | What It Means              | Real-Life Example                     | Programming Example     |
| -------------- | -------------------------- | ------------------------------------- | ----------------------- |
| **Sequencing** | Steps in the correct order | Following a recipe                    | Code runs top-to-bottom |
| **Selection**  | Making a decision          | “If it’s raining, bring an umbrella.” | `if` statements         |
| **Iteration**  | Repeating actions          | “Stir until smooth.”                  | `for` or `while` loops  |

Every algorithm in computer science uses **these three ideas** — sometimes all at once!

---

## 🧮 **3. Binary Conversion — The Problem**

Computers use **binary (1s and 0s)**, but humans use **decimal (0–9)**.
To communicate with computers, we often need to **convert** between these two systems.

We’ll explore two algorithms:

1. **Binary → Decimal**
2. **Decimal → Binary**

---

## 💡 **4. Algorithm #1: Binary to Decimal**

```js
function binaryToDec(binary) {
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[binary.length - i - 1] === "1") {
      decimal = decimal + Math.pow(2, i);
    }
  }
  return decimal;
}
```

Let’s explain this like you’re in middle school 👇

### 🧩 Step-by-step (Sequencing)

1. Start with a `decimal` value of 0.
2. Go through each **bit** (each 1 or 0) in the binary string.
3. If the bit is a “1,” add the matching power of 2 to your total.
4. When you’ve checked every bit, return the final number.

### 💬 Example:

Input: `"1011"`

| Bit           | Power of 2 | Add or Skip | Total  |
| ------------- | ---------- | ----------- | ------ |
| 1 (rightmost) | 2⁰ = 1     | Add         | 1      |
| 1             | 2¹ = 2     | Add         | 3      |
| 0             | 2² = 4     | Skip        | 3      |
| 1 (leftmost)  | 2³ = 8     | Add         | **11** |

Output: `11`

---

### 🧩 Sequencing, Selection, and Iteration in Action

| Concept        | Where It Happens                                                             | Explanation                                                       |
| -------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Sequencing** | The steps happen in order: define `decimal`, loop through bits, return total | Code executes from top to bottom                                  |
| **Selection**  | `if (binary[binary.length - i - 1] === "1")`                                 | The algorithm *chooses* whether to add based on if the bit is “1” |
| **Iteration**  | `for (let i = 0; i < binary.length; i++)`                                    | The algorithm *repeats* the same steps for every bit              |

✅ All three parts of an algorithm are here!

---

## 🔁 **5. Algorithm #2: Decimal to Binary**

```js
function decToBinary(dec) {
  let binary = "";
  if (dec === 0) {
    return 0;
  }
  while (dec > 0) {
    let remainder = dec % 2;
    binary = remainder + binary;
    dec = Math.floor(dec / 2);
  }
  return binary;
}

console.log(decToBinary(9));
```

### 🧩 Step-by-step (Sequencing)

1. If the number is 0, return 0.
2. While the number is greater than 0:

   * Divide it by 2.
   * Record the remainder (0 or 1).
   * Reduce the number using `Math.floor()`.
3. Reverse the remainders (since the first remainder is the last binary digit).
4. Return the final binary string.

### 💬 Example:

Input: `9`

| Step | Number ÷ 2 | Remainder | Binary So Far |
| ---- | ---------- | --------- | ------------- |
| 1    | 9 ÷ 2 = 4  | 1         | 1             |
| 2    | 4 ÷ 2 = 2  | 0         | 01            |
| 3    | 2 ÷ 2 = 1  | 0         | 001           |
| 4    | 1 ÷ 2 = 0  | 1         | **1001**      |

Output: `1001`

---

### 🧩 Sequencing, Selection, and Iteration in Action

| Concept        | Where It Happens               | Explanation                                                        |
| -------------- | ------------------------------ | ------------------------------------------------------------------ |
| **Sequencing** | Steps follow one after another | Divide → store remainder → update number                           |
| **Selection**  | `if (dec === 0)`               | Checks for a special case before looping                           |
| **Iteration**  | `while (dec > 0)`              | Repeats dividing and storing remainders until the number reaches 0 |

---

## 🧠 **6. What Makes These “Algorithms”**

Both `binaryToDec()` and `decToBinary()`:

* Have **clear inputs** (a binary or decimal number).
* Have **clear outputs** (a converted number).
* Use **sequencing**, **selection**, and **iteration** to process data.
* Are **finite** — they eventually stop (when the loop ends).
* **Solve a real problem**: converting between number systems computers and humans use.

That’s exactly what the **AP CSP** definition of an algorithm is:

> “A finite set of instructions that accomplishes a specific task.”

---

## 🧩 **7. AP CSP Connections**

| AP CSP Big Idea                            | Connection                                                                         |
| ------------------------------------------ | ---------------------------------------------------------------------------------- |
| **Big Idea 2: Data**                       | Binary and decimal conversions show how data can be represented in different ways. |
| **Big Idea 3: Algorithms and Programming** | Sequencing, selection, and iteration are the building blocks of all algorithms.    |
| **Big Idea 5: Impact of Computing**        | Binary representation affects how efficiently we store and transmit information.   |

---


## **Word Problem: The Grocery Checkout Challenge**

You’re coding a checkout system for the local grocery store, *CodeMart*.
Each item the customer buys is stored in an array of **objects**, where each object contains:

* `name`: the item’s name (string)
* `price`: the cost of one unit (number)
* `quantity`: how many the customer bought (number)

Here’s an example of the cart:

```js
const cart = [
  { name: "Apples", price: 3.5, quantity: 4 },
  { name: "Milk", price: 4.75, quantity: 2 },
  { name: "Steak", price: 15.99, quantity: 3 },
  { name: "Cereal", price: 5.25, quantity: 1 },
  { name: "Bananas", price: 1.25, quantity: 6 }
];
```

###  Rules

1. Any **item** that costs **less than $5** gets a **5% discount** on that item.
2. After all items are totaled (after those small discounts),
   if the **total cost** is **$100 or more**, apply an **extra 10% discount** on the final total.
3. Display the final price to two decimal places.

---

### **Your Task**

Write JavaScript code that:

1. Loops through the array and calculates each item’s subtotal (`price × quantity`).
2. Applies the **5% discount** where appropriate.
3. Adds all subtotals together.
4. Checks if the final total is **$100 or more** and applies the **extra 10% discount** if needed.
5. Prints the final total amount due.

---

### 💡 **Example Expected Output**

```
Your final total is $82.67 after all discounts.
It can also be 82.68 if you're a cool kid and know why
```