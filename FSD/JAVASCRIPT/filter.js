// Immutable Operation: It never alters the original array. 
// It always returns a brand-new array.Boolean Tester: The callback function must return a truthy value to keep an element, or a falsy value to discard it.
// Length Guard: The output array will either be the same length as the original or shorter. It can never be longer.
// Shallow Copying: It copies object references into the new array. Modifying an object inside the filtered array will affect the original array.
// Skip Behavior: It automatically ignores empty slots in sparse arrays, but it does process explicitly assigned undefined or null values.
// Element Isolation: It processes elements sequentially from index 0 to length - 1, making it highly predictable for data sorting.
// Chaining Capability: Because it returns an array, you can immediately chain it with other array methods like .map() or .reduce().


// Transformation Tool: It creates a brand-new array populated with the results of calling a provided function on every single element in the calling array.
// Immutable Operation: It does not modify or mutate the original array; it keeps the source data intact.
// Strict Length Match: The returned array is always exactly the same length as the original array, unlike filter().
// One-to-One Mapping: For every element input, there is exactly one element output. If your callback function doesn't return a value, the new array will fill that slot with undefined.
// Chaining Capability: Because it returns a fresh array, you can seamlessly link it right into other methods like .filter() or .reduce().
// Sparse Array Safety: It skips empty slots in sparse arrays, but it will still process elements that are explicitly set to undefined or null.


// Single Output Value: It condenses an entire array down into a single output value, which can be a number, string, object, or even another array.
// The Accumulator: It relies on a special tracking variable (the accumulator) that carries the running result from one element's calculation to the next.
// Initial Value Importance: It accepts an optional initial value as its second argument. If omitted, it automatically uses the first element of the array and skips the first loop iteration.
// Four Callback Arguments: The callback function can accept the accumulator, the current element, the current index, and the source array itself.
// Immutable Operation: Just like map() and filter(), it executes calculations without modifying or mutating the original source array.
// Ultimate Flexibility: It is powerful enough to replicate the exact behavior of both map() and filter(), making it the most versatile array method in JavaScript.
// Empty Array Risk: Calling reduce() on an empty array without providing an initial value will throw a severe TypeError crash in your application.

const orders = [
  { id: 1, item: "Smartphone", priceUSD: 500, status: "delivered" },
  { id: 2, item: "Phone Case", priceUSD: 20, status: "cancelled" },
  { id: 3, item: "Headphones", priceUSD: 100, status: "delivered" },
  { id: 4, item: "Charger", priceUSD: 15, status: "pending" }
];

const totalRupeeRevenue = orders
  // 1. FILTER: Keep only the delivered orders
  .filter(order => order.status === "delivered") 
  
  // 2. MAP: Convert the USD prices of those delivered orders to INR (₹)
  .map(order => order.priceUSD * 85) 
  
  // 3. REDUCE: Add all the converted Rupee prices together into one final total
  .reduce((total, priceINR) => total + priceINR, 0);

console.log(totalRupeeRevenue); 
// Output: 51000
