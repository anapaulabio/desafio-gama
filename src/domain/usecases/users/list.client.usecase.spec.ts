import ListClientUseCase from './list.usecase'

test("Teste unitário ListClientUsecase", async() => {
    expect(await ListClientUseCase.execute([{}])).toEqual([]);
});