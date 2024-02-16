import healthColor from '../myFunction';

test('checking myFunction, healthy', () => {
    const ivan = {who: 'Маг', health: 90};
    expect(healthColor(ivan)).toBe('healthy');
});