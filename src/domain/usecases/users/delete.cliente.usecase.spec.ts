import DeleteClientUseCase from "./delete.usecase"

test("Teste unitário DeleteClientUsecase", async() => {
    const client = {
        userId: 0
    };
    expect(await DeleteClientUseCase.execute(client)).toBeUndefined();
});