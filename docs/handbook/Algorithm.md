<!-- ---
title: 算法笔记
date: '2022-04-21'
sidebar: 'auto'
--- -->
# 算法

## 快速排序

```java
public class QuickSort {
    public static void main(String[] args) {
        int [] arr = {8,4,10,3,6,7,9};
        quickSort(arr, 0, arr.length - 1);
        for (int n : arr){
            System.out.print(n + " ");
        }
    }

    public static void quickSort(int[] arr, int low, int high) {
        if (low < high){
            System.out.println("low: " + low + " ,high: " + high);
            int index = getIndex(arr, low, high);
            quickSort(arr, low, index - 1);
            quickSort(arr, index + 1, high);
        }
    }

    private static int getIndex(int[] arr, int low, int high) {
        int index = arr[low];
        while (low < high){
            while (low < high && arr[high] >= index){
                high --;
            }
            arr[low] = arr[high];
            while (low < high && arr[low] <= index){
                low ++;
            }
            arr[high] = arr[low];
        }
        arr[low] = index;
        return low;
    }
}

```

输出 3 4 6 7 8 9 10
