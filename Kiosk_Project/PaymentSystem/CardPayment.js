class CardPayment {
    insertCard() {
        console.log('카드를 삽입하세요.');
    }

    waitAndPrintPaymentStatus() {
        console.log('결제 진행중...');
        setTimeout(() => {
            console.log('결제 완료!');
        }, 3000);  // 3초 후 결제 완료
    }

    ejectCard() {
        console.log('카드를 제거하세요.');
    }
}

export default CardPayment;