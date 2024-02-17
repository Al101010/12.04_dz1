import healthColor from '../myFunction';

test('checking myFunction, healthy', () => {
    const Oleg = {who: 'Маг', health: 90};
    const result = healthColor(Oleg);
    expect(result).toBe('healthy');
});

test('checking myFunction, wounded', () => {
    const Oleg = {who: 'Маг', health: 45};
    const result = healthColor(Oleg);
    expect(result).toBe('wounded');
});

test('checking myFunction, critical', () => {
    const Oleg = {who: 'Маг', health: 5};
    const result = healthColor(Oleg);
    expect(result).toBe('critical');
});