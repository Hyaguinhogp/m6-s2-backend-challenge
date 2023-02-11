from rest_framework.views import Request, Response, status
from rest_framework.generics import ListCreateAPIView
from .serializer import TransactionsSerializer
from datetime import datetime
from .models import Transaction
from stores.serializer import StoresSerializer
from stores.models import Store


class TransactionsView(ListCreateAPIView):

    queryset = Transaction.objects.all()
    serializer_class = TransactionsSerializer

    def get(self, request, *args, **kwargs):
        stores = Store.objects.all()
        response = []

        for store in stores:
            transactions = Transaction.objects.filter(store_id=store.id)
            serializer = TransactionsSerializer(transactions, many=True)

            response.append(
                {
                    "store": store.name,
                    "transactions": serializer.data,
                }
            )

        return Response(response, status=status.HTTP_200_OK)

    def post(self, request: Request):

        data = request.data
        data_list_str = data["data"].split("\n")
        data_list_dicts = []
        for n in data_list_str:
            if n == "":
                continue

            storeName = n[62:81].strip()
            storeInstance, isCreated = Store.objects.get_or_create(name=storeName)

            type = n[0:1]
            date = datetime.strptime(n[1:9], "%Y%m%d").date()
            value = n[9:19]
            cpf = n[19:30]
            card = n[30:42]
            time = datetime.strptime(n[42:48], "%H%M%S").time()
            owner = n[48:62].strip()
            data_list_dicts.append(
                {
                    "type": type,
                    "date": date,
                    "value": value,
                    "cpf": cpf,
                    "card": card,
                    "time": time,
                    "owner": owner,
                    "store": storeInstance.id,
                }
            )

        serializer = TransactionsSerializer(data=data_list_dicts, many=True)
        serializer.is_valid()
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)
