#include <stdio.h>
#define MAX 100

// Stack structure
typedef struct {
    char data[MAX];
    int top;
} Stack;

// Initialize stack
void initStack(Stack *s) {
    s->top = -1;
}

// Push an element onto the stack
void push(Stack *s, char c) {
    if (s->top < MAX - 1) {
        s->data[++(s->top)] = c;
    }
}

// Pop an element from the stack
char pop(Stack *s) {
    if (s->top >= 0) {
        return s->data[(s->top)--];
    }
    return '\0';
}

// Check if a character is alphanumeric
int isValidChar(char c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
}

// Convert uppercase to lowercase manually
char toLower(char c) {
    if (c >= 'A' && c <= 'Z') {
        return c + ('a' - 'A');
    }
    return c;
}

// Check if an expression is a palindrome
int isPalindrome(char *expr) {
    Stack stack;
    initStack(&stack);

    char filtered[MAX];
    int len = 0;

    // Filter and normalize the input
    for (int i = 0; expr[i] != '\0'; i++) {
        if (isValidChar(expr[i])) {
            filtered[len++] = toLower(expr[i]);
        }
    }

    // Push the first half of the string onto the stack
    for (int i = 0; i < len / 2; i++) {
        push(&stack, filtered[i]);
    }

    // Start comparing the second half
    int start = (len % 2 == 0) ? len / 2 : len / 2 + 1;

    for (int i = start; i < len; i++) {
        if (pop(&stack) != filtered[i]) {
            return 0; // Not a palindrome
        }
    }
    return 1; // Palindrome
}

// Main function
int main() {
    char expr[MAX];

    printf("Enter an expression: ");
    fgets(expr, MAX, stdin);

    // Remove newline character from fgets
    for (int i = 0; expr[i] != '\0'; i++) {
        if (expr[i] == '\n') {
            expr[i] = '\0';
            break;
        }
    }

    if (isPalindrome(expr)) {
        printf("The expression is a palindrome.\n");
    } else {
        printf("The expression is not a palindrome.\n");
    }

    return 0;
}
