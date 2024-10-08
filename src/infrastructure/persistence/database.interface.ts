export interface IDatabase {
    list(type: any, dataWhere?: any): any[],
    create(type: any, data: any): any,
    read(type: any, dataId: any): any,
    update(type: any, data: any): any,
    delete(type: any, dataId: any): any,
}