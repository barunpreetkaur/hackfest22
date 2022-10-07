#include<iostream>
using namespace std;
void funB(int);
void funA(int n){
	if(n>0){
		cout<<n<<endl;
		funB(n-1);
	}
}
void funB(int n){
	if(n>0){
		cout<<n<<endl;
		funA(n/2);
	}
}
int main(){
	int x=19;
	funA(x);
	return 0;
}
