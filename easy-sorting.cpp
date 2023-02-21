#include<bits/stdc++.h>
using namespace std;

vector <string> EasySorting(vector <string> arr){
	int n = arr.size();
	string key;
    for (int i = 1; i < n; i++){
        key = arr[i];
        int j = i - 1;
 
        while (j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }

	return arr;
}

int main(){
    vector <string> arr(5);
    for(int i=0;i<5;++i){
        cin>>arr[i];
    }
    vector <string> ans = EasySorting(arr);
    for(string i:ans){
        cout<<i<<" ";
    }
    return 0;
}